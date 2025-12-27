const MotivationCard = ({ title, text }) => {
  return (
    <div className="bg-white p-7 rounded-2xl shadow-md border-l-4 border-green-600 ">
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default MotivationCard;
