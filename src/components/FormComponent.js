import {Control,LocalForm,Errors} from 'react-redux-form';
import {Label, Row,Col,Button} from 'reactstrap';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
function handleSubmit(values){
    alert(JSON.stringify(values));
}
function MyForm(props){
    
    return (
        <div className="container">
        <div className="row row-content">
            <div className="col-12" >
                <h4>This is the form</h4>
            </div>
            <div className="col-12 col-md-9">
                <LocalForm onSubmit={(values)=>handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required,minLength: minLength(3),maxLength:maxLength(10)
                                }}
                            />
                            <Errors show="touched" className="text-danger"
                             model=".firstname"
                             messages={{
                                 required: 'This field is required ',
                                 minLength: 'Minimum 3 characters required',
                                 maxLength: 'Cannot have more than 10 characters'
                             }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" md={2}  >Last Name</Label>
                        <Col md={10}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required,minLength:minLength(3),maxLength: maxLength(10)
                                }}
                            />
                            <Errors show="touched" className="text-danger"
                                model=".lastname"
                                messages={{
                                    required: 'This field is required ',
                                    minLength: 'Minimum 3 characters required',
                                    maxLength: 'Cannot have more than 10 characters'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                                <Label htmlFor="telNum" md={2} >Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telNum" id="telNum" name="telNum" placeholder="Tel. number" 
                                     className="form-control"
                                     validators={{
                                        required,minLength: minLength(3),maxLength:maxLength(10),isNumber
                                    }}
                                    />
                                    <Errors className="text-danger"
                                     model=".telNum"
                                     show="touched"
                                     messages={{
                                         required:'Required',
                                         minLength:'Must be greater than 2 characters',
                                         maxLength: 'Must be less than 15 characters',
                                         isNumber: 'Must be a number'
                                     }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2} >E-mail</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" 
                                    placeholder="Email" 
                                    className="form-control"
                                    validators={{
                                        required,validEmail
                                    }}
                                    />
                                      <Errors className="text-danger"
                                     model=".email"
                                     show="touched"
                                     messages={{
                                         required:'Required',
                                         validEmail:'Invalid email address',
                                     }}
                                     />
                                </Col>
                            </Row >
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}} >
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                            className="form-check-input"
                                             />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                     </div>
                                </Col>
                                <Col md={{size:3, offset:1}} >
                                    <Control.select model=".contactType" name="contactType"
                                     className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2} >Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" 
                                    rows="12" 
                                    className="form-control" />
                                </Col>
                            </Row >
                            <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary" >Send Feedback</Button>
                                </Col>
                            </Row>
                </LocalForm>
            </div>
        </div>
        </div>
    );
}
export default MyForm;