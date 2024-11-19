import '../assests/css/compo.css';
export default function StudentTable(props){
    return(
        <div classname="outerDiv">
            <div classname="leftDiv">
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}