import React from 'react'

import Button from '../Button';

import styles from './ServiceSection.module.scss'

function ServiceSection() {
  return (
      <section className={styles.serviceSection}>
          <div className={styles.upperHalf}>
              <h2>Unsere Leistungen</h2>
          </div>
          <div className={styles.downerHalf}>
              <div className={styles.bgImage} />
              <h2 className='h1'>Wir freuen uns darauf Sie kennenzulernen!</h2>
              <p>Neukunden bekommen <span className={'serviceHighlight'}>5% Rabatt</span> auf alle Leistungen</p>
              <Button text={'Angebot einholen'} />
          </div>
    </section>
  )
}

export default ServiceSection;