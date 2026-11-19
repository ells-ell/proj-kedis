import "./DeanPage.css";

function DeanPage() {
    return (
        <div className="dean-page">

            {/* HEADER */}
            <header className="dean-header">
                <h1>KEDIS</h1>
                <p>DEAN PANEL</p>
            </header>

            {/* MAIN CONTENT */}
            <main className="dean-content">

                {/* GROUPS MANAGEMENT */}
                <section className="dean-section">

                    <div className="dean-section-header">
                        <h2>Groups Management</h2>
                        <button className="add-button">
                            + Add Group
                        </button>
                    </div>

                    <div className="groups-table">

                        <div className="groups-heading">
                            <span>Group ID</span>
                            <span>Group Name</span>
                            <span>Students</span>
                            <span>Actions</span>
                        </div>

                        <div className="groups-row">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                </section>


                {/* STUDENTS MANAGEMENT */}
                <section className="dean-section">

                    <div className="dean-section-header">
                        <h2>Students Management</h2>
                        <button className="add-button">
                            + Add Student
                        </button>
                    </div>

                    <div className="students-filter">
                        <label>Select Group:</label>

                        <select>
                            <option>Select a group</option>
                        </select>
                    </div>

                    <div className="students-table">

                        <div className="students-heading">
                            <span>Student ID</span>
                            <span>Student Name</span>
                            <span>Group</span>
                            <span>Actions</span>
                        </div>

                        <div className="students-row">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                </section>


                {/* LESSONS MANAGEMENT */}
                <section className="dean-section">

                    <div className="dean-section-header">
                        <h2>Lessons Management</h2>
                        <button className="add-button">
                            + Add Lesson
                        </button>
                    </div>

                    <div className="lessons-filter">
                        <label>Select Group:</label>

                        <select>
                            <option>Select a group</option>
                        </select>
                    </div>

                    <div className="lessons-table">

                        <div className="lessons-heading">
                            <span>Lesson ID</span>
                            <span>Subject</span>
                            <span>Teacher</span>
                            <span>Time</span>
                            <span>Actions</span>
                        </div>

                        <div className="lessons-row">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default DeanPage;