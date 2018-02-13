import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const styles = {
  customWidth: {
    width: 150
  }
};
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballManipulation: 1,
      dualTackling: 1,
      fieldCoverage: 1,
      gameStrategy: 1,
      kickingAbilities: 1,
      name: "",
      notes: "",
      passingAbilities: 1,
      playmakingRisks: 1,
      team: ""
    };
    this.setName = this.setName.bind(this);
    this.setTeam = this.setTeam.bind(this);
    this.setNotes = this.setTeam.bind(this);
    this.setBallManipulation = this.setBallManipulation.bind(this);
    this.setKickingAbilities = this.setKickingAbilities.bind(this);
    this.setDualTackling = this.setDualTackling.bind(this);
    this.setFieldCoverage = this.setFieldCoverage.bind(this);
    this.setGameStrategy = this.setGameStrategy.bind(this);
    this.setPassingAbilities = this.setPassingAbilities.bind(this);
    this.setPlaymakingRisks = this.setPlaymakingRisks.bind(this);
  }
  setName = (event) => this.setState({name: event.target.value});
  setTeam = (event) => this.setState({team: event.target.value});
  setNotes = (event) => this.setState({notes: event.target.value});
  setBallManipulation = (event, index, value) => this.setState({ballManipulation: value});
  setKickingAbilities = (event, index, value) => this.setState({kickingAbilities: value});
  setDualTackling = (event, index, value) => this.setState({dualTackling: value});
  setFieldCoverage = (event, index, value) => this.setState({fieldCoverage: value});
  setGameStrategy = (event, index, value) => this.setState({gameStrategy: value});
  setPassingAbilities = (event, index, value) => this.setState({passingAbilities: value});
  setPlaymakingRisks = (event, index, value) => this.setState({playmakingRisks: value});
  render() {
    return (
      <div className="row">
        <MuiThemeProvider>
          <form className="col s12">
            <h3>Add a new Player</h3>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Name" ref="name" type="text" onChange={this.setName} />
              </div>
              <div className="input-field col s6">
                <input placeholder="Team" ref="team" type="text" onChange={this.setTeam} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <SelectField
                  ref="ballManipulation"
                  autoWidth={true}
                  floatingLabelText="Ball manipulation"
                  value={this.state.ballManipulation}
                  onChange={this.setBallManipulation}>
                  <MenuItem value={1} primaryText="sucks" />
                  <MenuItem value={2} primaryText="bad" />
                  <MenuItem value={3} primaryText="normal" />
                  <MenuItem value={4} primaryText="nice" />
                  <MenuItem value={5} primaryText="perfect" />
                </SelectField>
              </div>
              <div className="input-field col s6 xs12">
                <SelectField
                  ref="kickingAbilities"
                  autoWidth={true}
                  floatingLabelText="Kicking Abilities"
                  value={this.state.kickingAbilities}
                  onChange={this.setKickingAbilities}>
                  <MenuItem value={1} primaryText="sucks" />
                  <MenuItem value={2} primaryText="bad" />
                  <MenuItem value={3} primaryText="normal" />
                  <MenuItem value={4} primaryText="nice" />
                  <MenuItem value={5} primaryText="perfect" />
                </SelectField>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 xs12">
                <SelectField
                  ref="dualTackling"
                  autoWidth={true}
                  floatingLabelText="Dual Tackling"
                  value={this.state.dualTackling}
                  onChange={this.setDualTackling}>
                  <MenuItem value={1} primaryText="sucks" />
                  <MenuItem value={2} primaryText="bad" />
                  <MenuItem value={3} primaryText="normal" />
                  <MenuItem value={4} primaryText="nice" />
                  <MenuItem value={5} primaryText="perfect" />
                </SelectField>
              </div>
              <div className="input-field col s6 xs12">
                <SelectField
                  ref="fieldCoverage"
                  autoWidth={true}
                  floatingLabelText="Field Coverage"
                  value={this.state.fieldCoverage}
                  onChange={this.setFieldCoverage}>
                  <MenuItem value={1} primaryText="sucks" />
                  <MenuItem value={2} primaryText="bad" />
                  <MenuItem value={3} primaryText="normal" />
                  <MenuItem value={4} primaryText="nice" />
                  <MenuItem value={5} primaryText="perfect" />
                </SelectField>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 xs12">
                <SelectField
                  ref="gameStrategy"
                  autoWidth={true}
                  floatingLabelText="Game Strategy"
                  value={this.state.gameStrategy}
                  onChange={this.setGameStrategy}>
                  <MenuItem value={1} primaryText="sucks" />
                  <MenuItem value={2} primaryText="bad" />
                  <MenuItem value={3} primaryText="normal" />
                  <MenuItem value={4} primaryText="nice" />
                  <MenuItem value={5} primaryText="perfect" />
                </SelectField>
              </div>
              <div className="input-field col s6 xs12">
                <SelectField
                  ref="passingAbilities"
                  autoWidth={true}
                  floatingLabelText="Passing Abilities"
                  value={this.state.passingAbilities}
                  onChange={this.setPassingAbilities}>
                  <MenuItem value={1} primaryText="sucks" />
                  <MenuItem value={2} primaryText="bad" />
                  <MenuItem value={3} primaryText="normal" />
                  <MenuItem value={4} primaryText="nice" />
                  <MenuItem value={5} primaryText="perfect" />
                </SelectField>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 xs12">
                <SelectField
                  ref="playmakingRisks"
                  autoWidth={true}
                  floatingLabelText="Playmaking Risks"
                  value={this.state.playmakingRisks}
                  onChange={this.setPlaymakingRisks}>
                  <MenuItem value={1} primaryText="sucks" />
                  <MenuItem value={2} primaryText="bad" />
                  <MenuItem value={3} primaryText="normal" />
                  <MenuItem value={4} primaryText="nice" />
                  <MenuItem value={5} primaryText="perfect" />
                </SelectField>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 xs12">
                <textarea
                  value={this.state.notes}
                  onChange={this.setNotes}
                  className="materialize-textarea"
                  placeholder="Notes"
                  rel="notes"></textarea>
              </div>
              <div className="input-field col s6 xs12">
                <input className="btn wave-effect waces-light" type="submit" name="action"></input>
              </div>
            </div>
          </form>
        </ MuiThemeProvider>
      </div>
    )
  }
}

export default New;