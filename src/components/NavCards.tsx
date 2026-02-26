import { FaLightbulb, FaFolder, FaUserPlus } from 'react-icons/fa6';

function NavCards() {
  return (
    <section className="nav-cards">
      <div>
        <span className="nav-card-caption">{'Everything else is one click away ->'}</span>
      </div>
      <div className="nav-cards-container">
        <div className="nav-card">
          <FaLightbulb size="1.5em" aria-hidden="true" /> My skills
        </div>
        <div className="nav-card">
          <FaFolder size="1.5em" aria-hidden="true" /> My work
        </div>
        <div className="nav-card">
          <FaUserPlus size="1.5em" aria-hidden="true" />
          About me
        </div>
      </div>
    </section>
  );
}

export default NavCards;
