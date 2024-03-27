import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { toggleDropdown } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dashboard.isDropdownOpen);

  const handleToggleDropdown = () => {
    dispatch(toggleDropdown());
  };

  return (
    <div id="main">
      <div id="dashboard">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62e028469b7de33a06e0c2d16bbdc9edf01cd58807c6bcf1a61605c5ac0b5a63?"
          id="logo"
        />
        <div className="label">D A S H B O A R D</div>

        <div>
          <div onClick={handleToggleDropdown} className="dropDowns">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b6f88159f337654b50282c1042afa3de2cb20121514e2b1da10241e0b350595?"
                className="icons"
              />
              <div>Dashboard</div>
            </div>
            {isOpen ? (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b03f4e18a2bd36e12a4b10d8a6b59f9c1814d20b80f5dbe9e40200ea63ccf0d?"
                className="icons"
              />
            ) : (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
                className="icons"
              />
            )}
          </div>
          {/* Drop downs */}
          {isOpen && (
            <div className="dropdownOptions">
              <div> Analytics </div>
              <div className="mt-3">Finance</div>
              <div className="mt-3">Job Board</div>
            </div>
          )}
        </div>
        <div className="dropDowns">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71bfada63ea499315d3f706d823fccbaf59ccf91b9ea573cda297f3b338d6b8?"
              className="icons"
            />
            <div>Messages</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="icons"
          />
        </div>
        <div className="dropDowns">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53937135c468bf9911ac784064aa2a98f4a4e7deb39f016c3d14a51274e948e4?"
              className="icon"
            />
            <div>Friends</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="icon"
          />
        </div>
        <div className="dropDowns">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dabec0c2906c8cda00c3c832b2100d44de575f08137fd25942582ea8052ba29c?"
              className="icon"
            />
            <div>Apps</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="icon"
          />
        </div>

        <div className="label">P A G E S</div>

        <div className="dropDowns">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/06147bbe82c89e72b2c0d416a2714a81e184e774b7e9a2328395553336a81e9d?"
              className="icons"
            />
            <div>Help Center</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="icons"
          />
        </div>
        <div className="dropDowns">
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae79b81f222127444475e095a5949bd3b88a73e03d9e441186cd06317b91c89b?"
              className="icons"
            />
            <div>File Manager</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87adc3fde21e6e0db7f3d36140b08a8c566f088b05a114a39c5796e12a06d298?"
            className="icons"
          />
        </div>
        <div id="dashboardFooter">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b04e0cb69f9867dbdbd422302f8c236bbcbbbe02fae172bf82909b560af4534?"
            className="icons"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e7bfcb6dd8570986be6363aee205e8ecb0676b8830f3a8f7c2661f4e8ca8e02?"
            className="icons"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9425ba7bd1bf0ec05eff6966063b21acceb12554f0095d8a677b66c74df1d90e?"
            className="icons"
          />
        </div>
      </div>
      <div id="page">
        <div className="searchDiv">
          <div className="searchDiv-2">
            <div className="searchDiv-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdbbaabaa6bbd721410caaf0e31fbb87bda9d4acd13213669dfddc80cea62eb0?"
                className="searchDivImg"
              />
              <div className="searchDiv-4">Search...</div>
            </div>
          </div>
          <div className="searchDiv-5">
            <div className="searchDiv-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b936bc142b8782b7d2773d2e4994d434ea54f4b948f94353d1792a79c22cc0ca?"
                className="searchDivImg-2"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84bdc1b7c402486efe03468595cc7ba394440347dc98a8d32741ede0a5f62687?"
                className="searchDivImg-3"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3eefc30e21d1802f59c457f33ab21d8753b404a406294f29322e87327553318?"
                className="searchDivImg-4"
              />
            </div>
            <img loading="lazy" srcSet="..." className="searchDivImg-5" />
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          <div className="unlockDiv">
            <div className="unlockDiv-2">
              <div className="unlockDiv-3">Unlock premium stats</div>
              <div className="unlockDiv-4">
                Get up to 10TB of storage for a limited time
              </div>
            </div>
            <div className="unlockDiv-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37772cec10f49b8cc7a1513c7e3169e029bb55a40535fa2c13481b2a821e02a4?"
                className="unlockDivImg"
              />
              <div className="unlockDiv-6">Upgrade</div>
            </div>
          </div>

          <div className="stats">
            <div className="statsDiv">
              <div className="statsDiv-2">Revenue</div>
              <div className="statsDiv-3">$56,945</div>
              <div className="statsDiv-4">
                <div
                  className="statsDiv-5"
                  style={{ color: "#20c997", backgroundColor: "#dcfff5" }}
                >
                  +45%
                </div>
                <div className="statsDiv-6">From 4.6%</div>
              </div>
            </div>
            <div className="statsDiv">
              <div className="statsDiv-2">Users</div>
              <div className="statsDiv-3">76.8%</div>
              <div className="statsDiv-4">
                <div
                  className="statsDiv-5"
                  style={{ color: "#E76975", backgroundColor: "#FFE0E3" }}
                >
                  -1.7%
                </div>
                <div className="statsDiv-6">From 4.6%</div>
              </div>
            </div>
            <div className="statsDiv">
              <div className="statsDiv-2">New Signups</div>
              <div className="statsDiv-3">116</div>
              <div className="statsDiv-4">
                <div
                  className="statsDiv-5"
                  style={{ color: "#848C9D", backgroundColor: "#F2F4F7" }}
                >
                  0.00
                </div>
              </div>
            </div>
            <div className="statsDiv">
              <div className="statsDiv-2">Retention</div>
              <div className="statsDiv-3">12.67%</div>
              <div className="statsDiv-4">
                <div
                  className="statsDiv-5"
                  style={{ color: "#20c997", backgroundColor: "#dcfff5" }}
                >
                  +0.6%
                </div>
                <div className="statsDiv-6">From 4.6%</div>
              </div>
            </div>
          </div>

          <div className="graphDiv">
            <div className="graphDiv-2">
              <div className="graphDiv-3">Performance</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1f0e64ed407b56b075ce9b0aa4080563fcfbf7b4b192c669c11278f0dced5c6?"
                className="graphDivImg"
              />
            </div>
            <div className="graphDiv-4">
              <div className="graphDiv-5">
                <div style={{ marginTop: "0px" }} className="graphDiv-6">
                  400
                </div>
                <div>300</div>
                <div>200</div>
                <div>100</div>
                <div>0</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4dac996220598fd5acf21bd99fefb1c8c8b1122dfef1d4afd48e7a8b3ab9223?"
                className="graphDivImg-2"
              />
            </div>
            <div className="graphDiv-11">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="graphDiv-19">
              <div className="graphDiv-20">
                <div className="graphDiv-21">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69ac6f95b20d15e56e6bc7a9757145f2c0c3cfd2d2f8ef9f03b0ee865a2fc89?"
                    className="graphDivImg-3"
                  />
                  <div className="graphDiv-22">Instagram</div>
                </div>
                <div className="graphDiv-23">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a7a86af250ec0c81dcece5164f164e75434caad94140efed2bb363c421df89a?"
                    className="graphDivImg-4"
                  />
                  <div className="graphDiv-24">Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
