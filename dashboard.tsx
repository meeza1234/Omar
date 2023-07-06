import React, { useState } from 'react';

function AppBar(props: { open?: boolean }) {
  const { open } = props;

  return (
    <header>
      <button onClick={() => {}}>
        {open ? 'Close Drawer' : 'Open Drawer'}
      </button>
      <h1>Dashboard</h1>
    </header>
  );
}

function Drawer(props: { open?: boolean }) {
  const { open } = props;

  return (
    <div>
      <nav>
        <ul>
          <li>Main Item 1</li>
          <li>Main Item 2</li>
          <li>Main Item 3</li>
        </ul>
      </nav>
    </div>
  );
}

function Chart() {
  return (
    <section>
      <h2>Chart</h2>
    </section>
  );
}

function Deposits() {
  return (
    <section>
      <h2>Recent Deposits</h2>
    </section>
  );
}

function Orders() {
  return (
    <section>
      <h2>Recent Orders</h2>
    </section>
  );
}

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar open={open} />
      <Drawer open={open} />
      <main>
        <Chart />
        <Deposits />
        <Orders />
      </main>
      <footer>
        <p>Made with ❤️ by Todo</p>
      </footer>
    </div>
  );
}
