import { Container } from "native-base";
import React, { Component } from "react";
import InfoModal from "../components/InfoModal";
import Selector from "./Selector";
import ProgressHeader from "./ProgressHeader";
import consume from "../../contexts/GlobalConsumer";


class SmokingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ visible: !this.state.visible });
    }

    getProgress() {
        const arr = this.props.navigation.getParam("missing", []);
        const total = this.props.navigation.getParam("total", 0);
        if (total === 0) return 0;
        return 100 - (arr.length / total) * 100;
    }

    render() {
        return (
            <Container>
                <ProgressHeader
                    toggleModal={this.toggleModal}
                    progress={this.getProgress()}
                />
                <Selector
                    navigation={this.props.navigation}
                    screen="Smoking"
                    icon={require("../../assets/profile/pink_smoke.png")}
                    text="Do you smoke?"
                    options={this.props.user.state.lang.smoking}
                />
                <InfoModal
                    visible={this.state.visible}
                    navigation={this.props.navigation}
                    toggleModal={this.toggleModal}
                />
            </Container>
        );
    }
}

export default consume(SmokingScreen)