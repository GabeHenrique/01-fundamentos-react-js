import styles from "./Comment.module.css"
import {HandsClapping, Trash} from "phosphor-react";
import {Avatar} from "../Avatar/Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GabeHenrique.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Henrique</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <HandsClapping/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
