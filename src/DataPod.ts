import {
  SmartContract,
  state,
  State,
  method,
  PublicKey,
  CircuitString,
  DeployArgs,
} from 'snarkyjs';

export class DataPod extends SmartContract {
  // Owner is the owner of the data pod
  @state(PublicKey) owner = State<PublicKey>();
  // Creator is the creator of the data pod, it can be different from the owner(e.g. created by other smart contract and then transferred to the owner)
  @state(PublicKey) creator = State<PublicKey>();
  // The name of the data pod, equivalent to the did name currently
  @state(CircuitString) name = State<CircuitString>();
  // The hash of the data, pointed to the data in the data storage
  @state(CircuitString) data = State<CircuitString>();
  init() {
    super.init();
  }
  deploy(args: DeployArgs) {
    super.deploy(args);
  }
  @method initContract(
    owner: PublicKey,
    creator: PublicKey,
    name: CircuitString,
    data: CircuitString
  ) {
    this.owner.set(owner);
    this.creator.set(creator);
    this.name.set(name);
    this.data.set(data);
  }

  @method setName(name: CircuitString) {
    this.name.set(name);
  }

  @method update(data: CircuitString) {
    this.data.set(data);
  }
}
