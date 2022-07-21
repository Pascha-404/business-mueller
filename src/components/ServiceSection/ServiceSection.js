import React from 'react'

import styles from './ServiceSection.module.scss'

function ServiceSection() {
  return (
      <section className={styles.serviceSection}>
          <div className={styles.upperHalf}>
              <h2>Unsere Leistungen</h2>
          </div>
          <div className={styles.downerHalf}>
              <div className={styles.bgImage}/>
          </div>
    </section>
  )
}

export default ServiceSection