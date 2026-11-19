import React from "react";
import "./AdminPages.css";

function AdminPages() {
    return (
        <div className="admin-pages">

            {/* HEADER */}
            <header className="admin-header">
                <h1>KEDIS</h1>
                <p>ADMIN PANEL</p>
            </header>

            {/* MAIN CONTENT */}
            <main className="admin-content">

                {/* DEANS MANAGEMENT */}
                <section className="deans-section">

                    <div className="admin-section-header">
                        <h2>Deans Management</h2>

                        <button className="add-button">
                            + Add Dean
                        </button>
                    </div>

                    <div className="deans-content">
                        <p>Manage registered deans</p>

                        <div className="dean list">
                            <textarea
                            className="deans-input"
                            placeholder="write dean information here..."> </textarea>
                        </div>
                    </div>

                </section>

                {/* TIME SLOTS MANAGEMENT */}
                <section className="time-slots-section">

                    <div className="admin-section-header">
                        <h2>Time Slots</h2>

                        <button className="add-button">
                            + Add Time Slot
                        </button>
                    </div>

                {/*TABLE HEADER*/}
                    <div className="time-slots-table">

                        <div className="time-slots-heading">
                            <span>ID</span>
                            <span>Start Time</span>
                            <span>End Time</span>
                            <span>Actions</span>
                        </div>
                        {/*TABLE HEADER ROW*/}
                        <div className="time-slots-row">
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                        </div>

                        

                    </div>

                </section>

            </main>

        </div>
    );
}

export default AdminPages;