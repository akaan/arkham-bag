import React = require("react");
import { PULL_PROTOCOLS } from "../../data/pull_protocols";
import { setPullProtocol } from "../../store/bag/actions";

interface PullProtocolSelectorProps {
  pullProtocolId: string;
  setPullProtocol: typeof setPullProtocol;
}

export class PullProtocolSelector extends React.Component<
  PullProtocolSelectorProps
> {
  constructor(props: PullProtocolSelectorProps) {
    super(props);
    this.functionChanged = this.functionChanged.bind(this);
  }
  public render() {
    return (
      <form className="pull-protocol-selector">
        <label htmlFor="select-protocol">Choose how you pull</label>
        <select id="select-protocol" onChange={this.functionChanged}>
          {PULL_PROTOCOLS.map(def => {
            return (
              <option key={def.id} value={def.id}>
                {def.description}
              </option>
            );
          })}
        </select>
      </form>
    );
  }

  private functionChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const selected = PULL_PROTOCOLS.find(def => def.id === event.target.value);
    if (selected !== null) {
      this.props.setPullProtocol(selected);
    }
  }
}
