function App() {
  const studentName = 'Tanzeem Shaikh';
  const studentId = '101585484';

  return (
    <div className="App">
      <header className="App-header">
        <h1>COMP3104 – Developer Operations</h1>
        <h2>Lab 05 – Single Page App with React</h2>
        <p><strong>Student Name:</strong> {studentName}</p>
        <p><strong>Student ID:</strong> {studentId}</p>
        <p>Deployed with GitHub Actions + GitHub Pages</p>
      </header>
    </div>
  );
}

export default App;