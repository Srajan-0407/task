import Navbar from "./components/Navbar";
import "./App.css";
//  import { useState } from "react";
// import axios from "axios";
// import { Modal, ModalHeader, ModalBody } from "reactstrap";
function App() {
  // const [number, setNumber] = useState("");
  // const [colourDocs, setcolourDocs] = useState([]);
  // const [stamps, setStamps] = useState([]);
  // const [color, setColor] = useState('')

  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  // const handleSubmit = (e) => {
  //   setStamps([]);
  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:3025/api/random", { count: number })
  //     .then((result) => {
  //       setcolourDocs(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  // const handleHover = (id) => {
  //   axios
  //     .put(`http://localhost:3025/api/savestamp/${id}`)
  //     .then((result) => {
  //       const res = colourDocs.map((ele) => {
  //         if (ele._id === result.data._id) {
  //           return { ...ele, ...result.data }
  //         } else {
  //           return ele
  //         }

  //       })
  //       setcolourDocs(res)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // };

  // const handleClick = (id) => {
  //   axios
  //     .post(`http://localhost:3025/api/findstamps/${id}`)
  //     .then((result) => {
  //       setStamps(result.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // let count = 1;
  return (
    <div>
      <Navbar />
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />
        <input type="submit" className="btn btn-primary btn-sm" />
      </form>
      <div className="row">
        <div className="col-md-6">
          {colourDocs.length > 0 &&
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Colour</th>
                  <th>No Of Time Stamps</th>
                </tr>
              </thead>
              <tbody>
                {colourDocs.map((ele) => {
                  return <tr>
                    <th style={{ backgroundColor: ele.color, height: '100px', width: '50px' }}
                      onMouseOver={() => {
                        handleHover(ele._id);
                        setColor(ele.color)
                      }}
                      onClick={() => {
                        handleClick(ele._id);
                        toggle()
                      }}></th>
                    <th style={{ width: '50px', justifyContent: 'center' }}>{ele.hoverCounts}</th>
                  </tr>
                })}
              </tbody>
            </table>
          }


        </div>



        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div className="col-md-12">

              {stamps.length > 0 && (
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Sl No</th>
                      <th>Time Stamps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stamps.map((ele, i) => {
                      return (
                        <tr key={i}>
                          <td style={{ backgroundColor: color }}>{count++}</td>
                          <td style={{ backgroundColor: color }}>{ele.stamps}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </ModalBody>

        </Modal>

      </div> */}
    </div>
  );
}

export default App;
