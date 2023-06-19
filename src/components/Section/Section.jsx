const Section = ({ title, children }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
