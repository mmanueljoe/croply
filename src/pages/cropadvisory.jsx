import seeds from "../assets/images/seed-planting.jfif";
import logo from "../assets/images/ai-logo.png";
import soil from "../assets/images/soil-inhand.jfif";
import tractors from "../assets/images/tractor.jpg";
import plants from "../assets/images/planting.jfif";
import blogs from "../assets/images/blog3.png";
import "../pages/cropadvisory.css";
export const Cropadvisory = () => {
    return (
      <>
      <div className="crop-advisory">
        <h1 className="cp">Crop Advisories</h1>
        <div className="image">
          <img src={logo} alt="CroplyAI Logo" />
          <p>CroplyAI</p>
        </div>
      </div>

      <section class="grid-container">
  {/* <!-- Seeds Card --> */}
  <div class="card">
    <div class="cta">
    <img src={seeds} alt="Seeds" />
    <h3>Seeds</h3>
    </div>
  </div>

  {/* <!-- Seedlings --> */}
  <div class="card">
  <div class="cta">
    <img src={soil} alt="Soil" />
    <h3>Seedlings</h3>
    </div>
  </div>

  {/* <!-- Machinery --> */}
  <div class="card">
  <div class="cta">
    <img src={tractors} alt="Seeds" />
    <h3>Machinery</h3>
    </div>
  </div>

  {/* <!-- Agro-Inputs Card --> */}
  <div class="card">
  <div class="cta">
    <img src={plants} alt="Seeds" />
    <h3>Agro-Inputs</h3>
    </div>
  </div>

  {/* <!-- Cultivation Process Card --> */}
  <div class="card">
  <div class="cta">
    <img src={seeds} alt="Seeds" />
    <h3>Cultivation Process</h3>
    </div>
  </div>

  {/* Crop Disease Solutions */}
  <div class="card">
  <div class="cta">
    <img src={blogs} alt="Seeds" />
    <h3>Crop Disease Solutions</h3>
    </div>
  </div>
</section>

      </>
    );
  };
  