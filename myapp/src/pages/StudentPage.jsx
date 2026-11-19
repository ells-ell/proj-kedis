import React from "react";
import "./StudentPage.css";
function StudentPage() {
    return (
        <div className="student-page">
            {/*HEADER*/}
            <header className="welcom-header">
                <h1>WELCOME BACK!</h1>
            </header>
            {/*MAIN CONTENT*/}
            <main className="student-content">
                {/*WELCOME*/}
                <section className="kedis-section">
                    <h2>KEDIS</h2>
                    <p>STUDENT PANEL</p>
                </section>
                {/*schedule*/}
                <section className="schedule-section">
                    <div className="schedule-title">
                        <h2>my shedule</h2>
                    </div>
                    <div className="schadule-table">
                        <span>pair</span>
                        <span>subject</span>
                        <span>teacher</span>
                        <span>room</span>
                        <span>time</span>
                    </div>
                    <div className="table-row">
                            <span>pair</span>
                            <span>subject</span>
                            <span>teacher</span>
                            <span>room</span>
                            <span>time</span>
                        </div>
                        <div className="table-row">
                            <span>pair</span>
                            <span>subject</span>
                            <span>teacher</span>
                            <span>room</span>
                            <span>time</span>
                        </div>
                        <div className="table-row">
                            <span>pair</span>
                            <span>subject</span>
                            <span>teacher</span>
                            <span>room</span>
                            <span>time</span>
                        </div>
                </section>
            </main>
        </div>
    );
}
export default StudentPage;