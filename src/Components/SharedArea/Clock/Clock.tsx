import { Component } from "react";
import "./Clock.css";
import notification from "../../../Utils/Notification";

interface ClockProps {
	format: "12h" | "24h" //24h //12
}

interface ClockState {
	time: string
}

class Clock extends Component<ClockProps, ClockState> {
    private timerId: number

    public constructor(props: ClockProps) {
        super(props);
        this.state = { time: ""};
    }

    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date()
            const hour12 = this.props.format === "12h"
            const time = now.toLocaleTimeString("en", { hour12 })
            this.setState({ time })
        }, 1000)
    }

    private msg = "Good Day!"

    public componentWillUnmount(): void {
        window.clearInterval(this.timerId)
    }

    public showTime = () => {
        const now = new Date()
        notification.success(this.msg + " " + now.toLocaleTimeString())
    }

    public render(): JSX.Element {
        return (
            <div className="Clock">
				<span>{ this.state.time }</span>
                <button onClick={this.showTime}>Show Time</button>
            </div>
        );
    }
}

export default Clock;
