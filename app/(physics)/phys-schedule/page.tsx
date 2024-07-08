import ClassSchedule from "@/components/class-schedule"

const SchedulePage = () => {
    const apiURL = process.env.PHYS_API_URL as string;

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default SchedulePage;