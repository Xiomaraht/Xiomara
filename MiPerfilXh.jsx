import HeaderLg from '../src/components/Laura/HeaderLg'
import FooterLg from '../src/components/Laura/FooterLg'
import MascotasXh from './components/Xiomara/MascotasXh'
import PerfilU from './components/Xiomara/PerfilU_Xh'
import './components/styles/MiPerfilXh.css'
export default function MiPerfilXh() {
  return (
    <>
        <HeaderLg />
        <div className='ContenedorCom_Xh'>
          <PerfilU/>
          <div className="contenedorMp-Xh">
            <MascotasXh/>
          </div>
        </div>
        <FooterLg />
    </>
  )
}
