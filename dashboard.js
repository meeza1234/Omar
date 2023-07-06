import React, { useState } from 'react';

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <header>
        <button onClick={toggleDrawer}>
          {open ? 'Close Drawer' : 'Open Drawer'}
        </button>
        <h1>Dashboard</h1>
      </header>
      <div>
        <nav>
          <ul>
            <li>Main Item 1</li>
            <li>Main Item 2</li>
            <li>Main Item 3</li>
          </ul>
        </nav>
      </div>
      <main>
        <section>
          <h2>Chart</h2>
        </section>
        <section>
          <h2>Recent Deposits</h2>
        </section>
        <section>
          <h2>Recent Orders</h2>
        </section>
      </main>
      <footer>
        <p>Made with ❤️ by Todo</p>
      </footer>
    </div>
  );
}
