import React from 'react';

const Map = () => {
  return (
    <div className="mt-20">
      <div className="w-full h-96 shadow-lg rounded-lg overflow-hidden">
        <iframe
          title="QCL Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.337254828536!2d106.66412387597106!3d10.851963958703297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292a0b65d1d3%3A0x58a8f6d88c569c09!2s237%2F60%2F17%20Ph%E1%BA%A1m%20V%C4%83n%20Chi%C3%AAu%2C%20Ph%C6%B0%E1%BB%9Dng%2014%2C%20Qu%E1%BA%ADn%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.HCM!5e0!3m2!1sen!2s!4v1700202000000!5m2!1sen!2s&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
