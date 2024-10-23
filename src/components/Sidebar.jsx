import { PencilSimpleLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://media.licdn.com/dms/image/v2/D4D16AQFtfmb6RPjU2A/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1664302456367?e=1735171200&v=beta&t=ZTQjMtpMmcTNOKyoBUT88wTAzK3R3DfvALnxxAasFXU"
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/30005569?s=400&u=2234455a3344c87f123e74c90469bd27d93b507e&v=4"
                />
                <strong>Maíse Damasceno</strong>
                <span>Desarrolladora Fullstack</span>
            </div>

            <footer>
                <a href="">
                    <PencilSimpleLine size={20} />
                    Editar tu perfil
                </a>
            </footer>
        </aside>
    )
}