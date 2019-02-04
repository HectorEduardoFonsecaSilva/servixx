/*------------------- Aqui van todos los imports-----------------*/
import Link from 'next/link'



/*-------------------- Inicio de mi componente-------------------*/
const Header = () => (
    <div>
        <header>
        <div class="container">
        <Link href="/"><a>Servixx</a></Link>
         <nav>
         <ul>
          <Link href="/"><li>Servido</li></Link>
          <Link href="/"><li>Usuario</li></Link>
          <Link href="/"><li>Mas</li></Link>
          <Link href="/"><li>Iniciar sesión</li></Link>
          <Link href="/"><li>Registrarse</li></Link>
          </ul>
         </nav>
        </div>
        </header>


      <style jsx>{`
      div {
        background: red;
      }
     `}</style>

     <style global jsx>{`
     body {
       margin: 0;
     }
     `}</style>


    </div>
)

export default Header
