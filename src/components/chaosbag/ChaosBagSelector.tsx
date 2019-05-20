import { Bags, Token } from "arkham-odds";
import * as React from "react";
import { setBagContents } from "../../store/bag/actions";

interface ChaosBagSelectorProps {
  setBagContents: typeof setBagContents;
}

const bagsMap = new Map<string, Token[]>();
bagsMap.set("Night of the Zealot (Easy)", Bags.NightOfTheZealot.Easy);
bagsMap.set("Night of the Zealot (Standard)", Bags.NightOfTheZealot.Standard);
bagsMap.set("Night of the Zealot (Hard)", Bags.NightOfTheZealot.Hard);
bagsMap.set("Night of the Zealot (Expert)", Bags.NightOfTheZealot.Expert);
bagsMap.set("The Dunwich Legacy (Easy)", Bags.TheDunwichLegacy.Easy);
bagsMap.set("The Dunwich Legacy (Standard)", Bags.TheDunwichLegacy.Standard);
bagsMap.set("The Dunwich Legacy (Hard)", Bags.TheDunwichLegacy.Hard);
bagsMap.set("The Dunwich Legacy (Expert)", Bags.TheDunwichLegacy.Expert);
bagsMap.set("The Path to Carcosa (Easy)", Bags.ThePathToCarcosa.Easy);
bagsMap.set("The Path to Carcosa (Standard)", Bags.ThePathToCarcosa.Standard);
bagsMap.set("The Path to Carcosa (Hard)", Bags.ThePathToCarcosa.Hard);
bagsMap.set("The Path to Carcosa (Expert)", Bags.ThePathToCarcosa.Expert);
bagsMap.set("The Forgotten Age (Easy)", Bags.TheForgottenAge.Easy);
bagsMap.set("The Forgotten Age (Standard)", Bags.TheForgottenAge.Standard);
bagsMap.set("The Forgotten Age (Hard)", Bags.TheForgottenAge.Hard);
bagsMap.set("The Forgotten Age (Expert)", Bags.TheForgottenAge.Expert);
bagsMap.set("The Circle Undone (Easy)", Bags.TheCircleUndone.Easy);
bagsMap.set("The Circle Undone (Standard)", Bags.TheCircleUndone.Standard);
bagsMap.set("The Circle Undone (Hard)", Bags.TheCircleUndone.Hard);
bagsMap.set("The Circle Undone (Expert)", Bags.TheCircleUndone.Expert);
bagsMap.set(
  "Curse of the Rougarou (Standard)",
  Bags.CurseOfTheRougarou.Standard
);
bagsMap.set("Curse of the Rougarou (Hard)", Bags.CurseOfTheRougarou.Hard);
bagsMap.set(
  "Carnevale of Horrors (Standard)",
  Bags.CarnevaleOfHorrors.Standard
);
bagsMap.set("Carnevale of Horrors (Hard)", Bags.CarnevaleOfHorrors.Hard);
bagsMap.set(
  "The Labyrinths of Lunacy (Standard)",
  Bags.TheLabyrinthsOfLunacy.Standard
);
bagsMap.set("The Labyrinths of Lunacy (Hard)", Bags.TheLabyrinthsOfLunacy.Hard);
bagsMap.set(
  "Guardians of the Abyss (Standard)",
  Bags.GuardiansOfTheAbyss.Standard
);
bagsMap.set("Guardians of the Abyss (Hard)", Bags.GuardiansOfTheAbyss.Hard);

export class ChaosBagSelector extends React.Component<ChaosBagSelectorProps> {
  constructor(props: ChaosBagSelectorProps) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  public handleSelection(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.setBagContents(bagsMap.get(event.currentTarget.value));
  }

  public render() {
    return (
      <div className="chaos-bag-selector">
        <select onChange={this.handleSelection}>
          {Array.from(bagsMap.keys()).map(k => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
