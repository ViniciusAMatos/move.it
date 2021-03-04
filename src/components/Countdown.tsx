
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {

  const {
    seconds,
    minutes,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountdownContext)

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');




  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>

      </div>


      {hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton}`}>
          Ciclo encerrado
        </button>)
        :
        (
          <>
            {
              isActive ? (
                <button
                  onClick={resetCountDown}
                  type="button"
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                  Abandonar ciclo
                </button>)
                :
                (<button
                  onClick={startCountDown}
                  type="button"
                  className={styles.countdownButton}>
                  Iniciar um ciclo
                </button>
                )
            }
          </>)
      }





    </div>
  );
}