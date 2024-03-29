import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar
        src="https://avatars.githubusercontent.com/u/66969774?v=4"/>

        <strong>Eduardo Henrique</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine />
            Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
