import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1553780753-b128e6787eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                alt=""
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/GuilhermeSalkovski.png" />
                <strong>Guilherme Salkovski</strong>
                <span>Software Developer</span>
            </div>

            <footer>
                <a href="#">
                   <PencilLine size={20} />
                   Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}