export default function App() {
  const m = 4;
  const n = 5;

  const arr1 = new Array(m).fill("");
  const arr2 = new Array(n).fill("");

  return (
    <div className="App">

      <table>
        <tbody>
          {arr1.map((ele, i) => {
            return (
              <tr className="outsidebox">
                {arr2.map((ele, j) => {
                  return (
                    <td
                      className="insidebox"
                      style={{
                        background: (i + j) % 2 === 0 ? "white" : "black"
                      }}
                    >
                      {i}
                      {j}
                    </td>
                  );
                })}{" "}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
