import ReactCalendar from "react-calendar";

const Calendar = ({ onChange, value }) => {
  return (
    <div>
      <ReactCalendar onChange={onChange} value={value} />
    </div>
  );
};
export default Calendar;
