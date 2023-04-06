import React, {  useState } from "react";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
interface Props {
  isSubmitting?: boolean;
  loading?: boolean;
  buttonSubmitCustom?: any;
  onSubmit: any
}

const FormDirty: BsPrefixRefForwardingComponent<"form", Props> = (props) => {
  const { loading, isSubmitting, buttonSubmitCustom, onSubmit, ...newProps } = props;
  const [formIsDirty, setFormIsDirty] = useState<boolean>(false);
  const [isCancelling, setIsCancelling] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <Form {...newProps} onSubmit={onSubmit}>
      <>
        {formIsDirty &&
          isCancelling &&
          alert("You are about to cancel changed form. Are you sure?")}
        {newProps.children}
        <div className="form-footer">
          <Form.Group>
            {buttonSubmitCustom ? (
              buttonSubmitCustom
            ) : (
              <Button variant="primary" type="submit">
                Save
              </Button>
            )}
            {formIsDirty && (
              <Button
                variant="light"
                type="button"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
            )}
          </Form.Group>
        </div>
      </>
    </Form>
  );
};

export default FormDirty;
