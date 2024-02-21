import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              1. The teams can have a minimum of 2 members and a maximum of 4
              members. 🤝👥
              <br /> <br />
              2. The last date for team registration is 9th Of March 2024. ⏰🗓️{" "}
              <br />
              <br />
              3. The last date for abstract submission is 10th Of March 2024. 📝🗓️{" "}
              <br />
              <br />
              4. The project should be unique 🚀🔍 <br />
              <br />
              5. The event will have three phases of judge review. Projects will
              be evaluated every 8 hours from the beginning of the finale. 👁️‍🗨️🕒{" "}
              <br />
              <br />
              6. The project's work should sustain the whole 36 hours; if it
              fails to do so, the team will be disqualified immediately. 🏆🕒❌{" "}
              <br />
              <br />
              7. Code of conduct is strictly monitored, and any case of
              uncivilized behavior will result in the whole team's
              disqualification. 🚫👮‍♂️❌ <br />
              <br />
            </div>
            <div className="guidelines-2">
              8. The abstract submission round is completely free for all teams
              that have registered on or before the 10th March. 🆓📅{" "}
              <br />
              <br />
              9. The shortlisted/scrutinized teams for the finale of
              "HACK-TO-CRACK" will be announced by 10 pm on the 12th of March 📣🏁 
              10. The Finale round begins at Offlinne Mode at ViMEET Campus.
              🏁🕙🏁
              <br />
              <br /> 11. The finale round will be offline and held at our 
              Vishwaniketan institute of Management Entreprenureship Enigeeniering, Kumbhiwali, Mumbai. 🏛️📍 <br />
              <br />
              12. Power outlets and worksheets will be provided to all teams
              prior to the commencement of the event. 🔌📑 <br />
              <br />
              13. All technical and physical requirements for the projects
              should be brought by the team only, and no assistance will be
              provided in this case. ⚙️🛠️🚫
              <br /> <br />
              14. Teams must present their projects in a clear and organized
              manner during the finale, ensuring effective communication of
              their ideas. 🗣️📊
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
