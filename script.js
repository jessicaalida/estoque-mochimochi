* { box-sizing: border-box; }
:root {
  --bg: #f7f5ff;
  --card: #ffffff;
  --border: #eae7ff;
  --text: #222;
  --muted: #666;
  --primary: #6a5acd;
  --green: #4CAF50;
  --orange: #ff9800;
  --blue: #2196F3;
  --red: #f44336;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  margin: 0;
  padding: 20px;
}

.container {
  background: var(--card);
  max-width: 1000px;
  margin: auto;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(0,0,0,.08);
  border: 1px solid var(--border);
}

.logo { text-align: center; margin-bottom: 8px; }
.logo img { max-width: 180px; height: auto; }

h1 { text-align: center; margin: 8px 0 18px; }

.totais {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  justify-content: center;
  margin-bottom: 16px;
}
.totais strong { color: var(--text); }

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}
.form input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
}
.form #quantidade { max-width: 120px; }
.form #preco { max-width: 160px; }
.form button {
  padding: 10px 14px;
  border: 0;
  border-radius: 10px;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
}
.form button:hover { filter: brightness(.95); }

.toolbar input {
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  min-width: 240px;
  margin-bottom: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

table { width: 100%; border-collapse: collapse; }
th, td { padding: 12px; border-bottom: 1px solid var(--border); text-align: center; }
td:first-child, th:first-child { text-align: left; }

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}
button.action {
  padding: 6px 10px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
}
.action.in  { background: var(--green); }
.action.out { background: var(--orange); }
.action.edt { background: var(--blue); }
.action.del { background: var(--red); }

@media (max-width: 720px) {
  .form { flex-direction: column; }
  .toolbar { flex-direction: column; align-items: stretch; }
  .totais { justify-content: space-between; }
}
