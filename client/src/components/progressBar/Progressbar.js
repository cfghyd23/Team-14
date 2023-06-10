import React, {useState, useEffect} from 'react'
import styles from "./progressbar.module.css"
export default function Progressbar() {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, isRunning])
  return (
	  <div>
		  <div className={styles.progressbar}>
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#a66cff",
				  transition:"width 0.5s"
			  }}></div>
			  <span className={styles.progressPercent}>{ filled }%</span>
		  </div>
		  <button className={styles.btn} onClick={() => {setIsRunning(true)}}>Show progress</button>
	</div>
  )
}