<Container>
          <Row>
            <Col sm="7" className="ml-auto mr-auto text-center">
              <form onSubmit={handleSubmit}>
                <FormGroup style={{ display: "flex" }}>
                  <Input
                    placeholder="https://www.youtube-link.com/"
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button
                    color="danger"
                    type="submit"
                    style={{ marginLeft: "20px" }}
                  >
                    Search
                  </Button>
                </FormGroup>
              </form>
            </Col>
          </Row>
        </Container>