import isotipo from '../assets/img/isotipo.svg'
import privateCeo from '../assets/img/privateCeo.svg'
export const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <div className='footer' data-testid='Footer'>
      <div className='footer-container'>
        <img src={isotipo} className='Isotipo-logo' alt='Isotipo Left' />
        <span>&copy;{`${year} Novopayment Inc. All rights reserved.`}</span>
        <img
          src={privateCeo}
          className='Private-CEO-logo'
          alt='Isotipo Right'
        />
      </div>
    </div>
  )
}
