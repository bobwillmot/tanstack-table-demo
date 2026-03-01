import React from "react";
import TableDemo from "./TableDemo";

function App() {
  return (
    <div style={{ padding: 32, maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h1 style={{ textAlign: 'center' }}>TanStack Table Demo: Gettysburg Address</h1>
      <TableDemo />
    </div>
  );
}

export default App;
