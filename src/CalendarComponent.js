import React, { useState, useEffect } from 'react';
import './CalendarComponent.css';

const startHour = 8;
const endHour = 17;
const maxClassesPerDay = 9;
const timeSlots = Array.from({ length: maxClassesPerDay }, (_, i) => startHour + i);

const CalendarComponent = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [bookedSlots, setBookedSlots] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [slotsLeft, setSlotsLeft] = useState(maxClassesPerDay);

  useEffect(() => {
    if (selectedDay) {
      const today = new Date();
      const endTime = new Date(today.setHours(endHour, 0, 0, 0));
      const interval = setInterval(() => {
        const now = new Date();
        const diff = endTime - now;
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        setTimeRemaining(`${hours}h ${minutes}m`);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [selectedDay]);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setSlotsLeft(maxClassesPerDay - (bookedSlots[day]?.length || 0));
  };

  const handleSlotBooking = (hour) => {
    setBookedSlots((prev) => {
      const daySlots = prev[selectedDay] || [];
      if (daySlots.length < maxClassesPerDay) {
        return {
          ...prev,
          [selectedDay]: [...daySlots, hour],
        };
      }
      return prev;
    });
    setSlotsLeft((prev) => prev - 1);
  };

  const isSlotBooked = (day, hour) => {
    return bookedSlots[day]?.includes(hour);
  };

  const renderTimeSlots = () => {
    if (!selectedDay) return <p>Please select a day.</p>;

    return timeSlots.map((hour) => (
      <div
        key={hour}
        className={`time-slot ${isSlotBooked(selectedDay, hour) ? 'booked' : 'available'}`}
        onClick={() => !isSlotBooked(selectedDay, hour) && handleSlotBooking(hour)}
      >
        {hour}:00 - {hour + 1}:00 {isSlotBooked(selectedDay, hour) ? "(Booked)" : ""}
      </div>
    ));
  };

  const renderDaysOfWeek = () => {
    const days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date.toLocaleDateString('en-US', { weekday: 'long', month: 'numeric', day: 'numeric' });
    });

    return days.map((day) => (
      <button
        key={day}
        className={`day-button ${selectedDay === day ? 'active' : ''}`}
        onClick={() => handleDaySelect(day)}
      >
        {day}
      </button>
    ));
  };

  return (
    <div className="calendar-container">
      <h3>Select a Day</h3>
      <div className="days-of-week">
        {renderDaysOfWeek()}
      </div>
      <h3>Available Slots</h3>
      <div className="time-slots">
        {renderTimeSlots()}
      </div>
      {selectedDay && (
        <div className="day-info">
          <p>Time Remaining Today: {timeRemaining}</p>
          <p>Slots Left Today: {slotsLeft}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
