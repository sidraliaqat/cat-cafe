import CatCard from './CatCard';

const CATS = [
  { id: 1, name: 'Sasha', description: 'Naps on the warmest windowsill in the house.', color: '#D8A48F' },
  { id: 2, name: 'Kittu', description: 'Greets every guest at the door, tail up.', color: '#B9AEDB' },
  { id: 3, name: 'Aaru', description: 'Steals a sip of foam whenever no one is looking.', color: '#E6B98C' },
];

function MenuSection() {
  return (
    <section className="menu-section" id="menu">
      <h2>Meet the Regulars</h2>
      <div className="cat-grid">
        {CATS.map((cat) => (
          <CatCard key={cat.id} name={cat.name} description={cat.description} color={cat.color} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
