import CatIllustration from './CatIllustration';

function CatCard({ name, description, color }) {
  return (
    <div className="cat-card">
      <CatIllustration body={color} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CatCard;
