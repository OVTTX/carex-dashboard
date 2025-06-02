import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    // Fetch students list
    axios.get('/api/students')
      .then(res => {
        setStudents(res.data);
        if (res.data.length > 0) {
          setSelectedStudentId(res.data[0].id);
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedStudentId) {
      // Fetch performance data for selected student
      axios.get('/api/performance/' + selectedStudentId)
        .then(res => setPerformanceData(res.data))
        .catch(err => console.error(err));
    }
  }, [selectedStudentId]);

  const chartData = {
    labels: performanceData.map(p => p.date),
    datasets: [
      {
        label: 'Notas',
        data: performanceData.map(p => p.score),
        borderColor: '#6b46c1',
        backgroundColor: 'rgba(107, 70, 193, 0.3)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#6b46c1',
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 flex flex-col space-y-8 overflow-y-auto">
        <div className="flex items-center space-x-3">
          <img src="https://framerusercontent.com/images/2r3aydMUtf21dgRfYgmjqsZDDPE.svg" alt="CareX Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">CareX</span>
        </div>
        <nav className="flex flex-col space-y-4 text-gray-300 text-sm font-semibold">
          <a href="#" className="hover:text-purple-600 transition-colors">Dashboard</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Relatórios</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Agendamento</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Análise AI</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Configurações</a>
        </nav>
        <div className="mt-auto text-gray-400 text-xs">
          © 2024 CareX. Todos os direitos reservados.
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top bar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition">Notificações</button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <img src="https://framerusercontent.com/images/0ylINSpeKczPvu8XF4CjYwZAZw.svg" alt="User Avatar" className="w-8 h-8 rounded-full" />
              <span>Olá, Usuário</span>
            </div>
          </div>
        </header>

        {/* Students selector */}
        <section className="mb-6">
          <label htmlFor="student-select" className="block mb-2 font-semibold">Selecione o aluno:</label>
          <select
            id="student-select"
            className="bg-gray-800 text-white p-2 rounded-md w-full max-w-xs"
            value={selectedStudentId || ''}
            onChange={e => setSelectedStudentId(Number(e.target.value))}
          >
            {students.map(student => (
              <option key={student.id} value={student.id}>{student.name}</option>
            ))}
          </select>
        </section>

        {/* Stats cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Alunos Ativos</h2>
            <p className="text-3xl font-bold">{students.length}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Matrículas Novas</h2>
            <p className="text-3xl font-bold">312</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Taxa de Retenção</h2>
            <p className="text-3xl font-bold">89%</p>
          </div>
        </section>

        {/* Performance chart */}
        <section className="bg-gray-800 rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Performance dos Alunos</h2>
          <Line data={chartData} />
        </section>

        {/* Features list */}
        <section className="bg-gray-800 rounded-lg p-6 shadow-md space-y-6 max-w-md">
          <h2 className="text-xl font-semibold mb-4">Funcionalidades</h2>
          <ul className="space-y-4 text-gray-300">
            <li>Automações integradas</li>
            <li>BrainX AI para análises avançadas</li>
            <li>Integração com Nuvem</li>
            <li>Análise de Performance detalhada</li>
            <li>Lista de Chamada digital</li>
            <li>Criptografia com IA</li>
            <li>Gerador de grade de horário</li>
            <li>Workflows automatizados</li>
            <li>Portal para pais</li>
            <li>Chat interno</li>
            <li>Score para professores</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
