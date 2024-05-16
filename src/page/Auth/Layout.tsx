import { useState } from "react"
import AuthHeader from "./authHeader/AuthHeader"
import './Layout.scss'
import { Modal } from "./modal/Modal"
import SIgnUp from "./signUp/SIgnUp"
const Layout = () => {
  const [openModal,setOpenModal] = useState(false);
  return (
     <>
     <main>
      <div>
      <AuthHeader/>
         

         <section className="container">
          <div className="hero">
            <div className="hero__text">
              <h1>Stay curious.</h1>
              <p>Discover stories, thinking , and expertise from writers
                on any topic
              </p>
              <button className="login" onClick={() => setOpenModal(true)}>Get start</button>
              <Modal openModal={openModal} setOpenModal={setOpenModal}>
                       <SIgnUp/>
                    </Modal>
            </div>
          </div>
         </section>
      </div>
     </main>
     </>
  )
}

export default Layout