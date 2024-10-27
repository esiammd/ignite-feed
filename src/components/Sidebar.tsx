import { PencilSimpleLine } from '@phosphor-icons/react'

import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://media.licdn.com/dms/image/v2/D4D16AQFtfmb6RPjU2A/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1664302456367?e=1735171200&v=beta&t=ZTQjMtpMmcTNOKyoBUT88wTAzK3R3DfvALnxxAasFXU"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/esiammd.png" />

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