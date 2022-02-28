import { useEffect, useState } from "react";
import XLSX from "xlsx";

function ParseSpreadsheet({ state }) {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = state;
  const [data, setData] = useState([]);
  const [cols, setCols] = useState([]);
  const [offers, setOffers] = useState([]);
  const [vehicle, setVehicle] = useState({ make: "", year: "", model: "" });
  const [cta, setCTA] = useState({
    leftButtonLink: "/custom-mslp-audi-2-offer.htm#inventory",
    leftButtonText: "View Inventory",
    rightButtonLink: "/contact-form.htm",
    rightButtonText: "Contact Sales",
    disclaimer: "Disclaimer here...",
  });
  const [jellybean, setJellybean] = useState({
    link: "https://cdn2.webdamdb.com/1280_seiSh5BUfxe71QDs.png?1631033777",
    scale: "0.8",
  });

  useEffect(() => {
    console.log(pages);
    if (pages.length > 1) {
      let currentPageOffers = pages[currentPage].slice(1, 5);
      console.log(currentPageOffers);
      setFormData({
        offers: currentPageOffers
          .filter((offer) => offer != undefined)
          .map((offer) => {
            return {
              id: offers.length + 1,
              type: "callout",
              width: "6",
              top: offer.split("\r")[0],
              bottom: offer.split("\r")[1],
            };
          }),
        vehicle: {
          make: pages[currentPage][0].split(" ")[1],
          year: pages[currentPage][0].split(" ")[0],
          model: pages[currentPage][0].split(" ")[2],
        },
        cta: cta,
        jellybean: jellybean,
      });
    }
  }, [pages, currentPage]);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const ab = e.target.result;
      const wb = XLSX.read(ab, { type: "array" });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_json(ws, {
        header: 1,
      });
      const numOfCols = data[2].length;
      let offerColumns = [];
      data.map((row) => {
        for (let i = 0; i < numOfCols; i++) {
          if (offerColumns[i]) {
            offerColumns[i].push(row[i]);
          } else {
            offerColumns[i] = [];
            offerColumns[i].push(row[i]);
          }
        }
      });
      offerColumns = offerColumns.map((row) => {
        return row.splice(2);
      });
      offerColumns.shift();
      console.log(offerColumns);
      setPages(offerColumns);
      setData(data);
      setCols(make_cols(ws["!ref"]));
    };
    reader.readAsArrayBuffer(file);
  };
  const handlePageDecrease = (e) => {
    if (currentPage <= 0) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageIncrease = (e) => {
    console.log(pages.length);
    if (currentPage >= pages.length - 1) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <DragDropFile handleFile={handleFile}>
        <div className="row">
          <div className="col-xs-12">
            <DataInput handleFile={handleFile} />
          </div>
        </div>
        {/* <div className="row">
        <div className="col-xs-12">
          <OutTable data={data} cols={cols} />
        </div>
      </div> */}
      </DragDropFile>
      {pages.length == 0 ? (
        <></>
      ) : (
        <div>
          <p>page {currentPage}</p>
          <button onClick={handlePageDecrease}>-</button>
          <button onClick={handlePageIncrease}>+</button>
        </div>
      )}
      <div>
        <p></p>
      </div>
    </>
  );
}

function DragDropFile({ handleFile, children }) {
  const suppress = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) handleFile(files[0]);
  };

  return (
    <div onDrop={handleDrop} onDragEnter={suppress} onDragOver={suppress}>
      {children}
    </div>
  );
}

function DataInput({ handleFile }) {
  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) handleFile(files[0]);
  };

  return (
    <form className="form-inline">
      <div className="form-group">
        <label htmlFor="file">Drag or choose a spreadsheet file</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

// function OutTable({ data, cols }) {
//   return (
//     <div className="table-responsive">
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             {cols.map((c) => (
//               <th key={c.key}>{c.name}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((r, i) => (
//             <tr key={i}>
//               {cols.map((c) => (
//                 <td key={c.key}>{r[c.key]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm",
]
  .map((x) => `.${x}`)
  .join(",");

const make_cols = (refstr) => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};

export default ParseSpreadsheet;
