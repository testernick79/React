import React from "react";
import ReactDOM from "react-dom";

const stateInfo = (
    state, population, capitol,
    idahoState, idahoPopulation, idahoCapitol,
    tennesseState, tennessePopulation, tennesseCapitol,
    maineState, mainePopulation, maineCapitol,
    wisconsinState, wisconsinPopulation, wisconsinCapitol, 

) => {
    return (
        <table>
            <tbody>
                <td><strong>{state}</strong></td>
                <td><strong>{population}</strong></td>
                <td><strong>{capitol}</strong></td>
            </tbody>

            <tbody>
                <td>{idahoState}</td>
                <td>{idahoPopulation}</td>
                <td>{idahoCapitol}</td>
            </tbody>

            <tbody>
                <td>{tennesseState}</td>
                <td>{tennessePopulation}</td>
                <td>{tennesseCapitol}</td>
            </tbody>

            <tbody> 
                <td>{maineState}</td>
                <td>{mainePopulation}</td>
                <td>{maineCapitol}</td>
            </tbody>

            <tbody>
                <td>{wisconsinState}</td>
                <td>{wisconsinPopulation}</td>
                <td>{wisconsinCapitol}</td>
            </tbody>
        </table>
    );
};

ReactDOM.render(
    stateInfo(
        '   STATE   ', '    POPULATION      ', '    CAPITOL     ', 
        'Idaho', '1.719 Million', 'Boise',
        'Tennesse', '6.651 Million', 'Nashville',
        'Maine', '1.113 Million', 'Agusta',
        'Wisconsin', '6.651 Million', 'Madison',
    ),
    document.getElementById('root')
);