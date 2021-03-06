import React = require("react");
import { BagState } from "../../store/bag/types";
import { saveConfiguration } from "../../store/system/actions";

interface ConfigurationSaverProps {
  bagState: BagState;
  saveConfiguration: typeof saveConfiguration;
}

interface ConfigurationSaverState {
  configurationTitle: string;
}

export class ConfigurationSaver extends React.Component<
  ConfigurationSaverProps,
  ConfigurationSaverState
> {
  constructor(props: ConfigurationSaverProps) {
    super(props);
    this.state = { configurationTitle: "" };
    this.onConfigurationTitleChanged = this.onConfigurationTitleChanged.bind(
      this
    );
    this.onSave = this.onSave.bind(this);
  }

  public render() {
    return (
      <form className="configuration-saver">
        <div>
          <input
            type="text"
            value={this.state.configurationTitle}
            placeholder="Name of configuration"
            onChange={this.onConfigurationTitleChanged}
          />
        </div>
        <button type="submit" onClick={this.onSave}>
          Save
        </button>
      </form>
    );
  }

  private onConfigurationTitleChanged(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    this.setState({
      configurationTitle: event.target.value
    });
  }

  private onSave(event: React.MouseEvent<HTMLButtonElement>) {
    this.props.saveConfiguration(
      this.state.configurationTitle,
      this.props.bagState.contents,
      this.props.bagState.effects,
      this.props.bagState.pullProtocol
    );
    this.setState({ configurationTitle: "" });
    event.preventDefault();
  }
}
