import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

function Newssection() {
  return (
    <section id="home" className="news-section">
    <CardGroup>
      <Card>
      <Card.Body>
        <Figure>
      <Figure.Image
        src="https://livedemo00.template-help.com/wt_prod-22403/images/home-09-570x415.jpg"/>
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <Button type="submit"><h4>News</h4></Button>
        </div>
        </div>
        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
        <h6>by Ronald Chen</h6>
        </div>
        </div>
        </div>
        </section>
    </Figure.Caption>
    </Figure>
    </Card.Body>
    </Card>

      <Card>
      <Card.Body>
      <Figure>
      <Figure.Image
      src="https://livedemo00.template-help.com/wt_prod-22403/images/home-07-570x415.jpg"/>
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <Button type="submit"><h4>News</h4></Button>
        </div>
        </div>
        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
        <h6>by Ronald Chen</h6>
    </div>
    </div>
    </div>
    </section>
    </Figure.Caption>
    </Figure>
    </Card.Body>
    </Card>

      <Card>
      <Card.Body>
      <Figure>
      <Figure.Image
      src="https://livedemo00.template-help.com/wt_prod-22403/images/home-08-570x415.jpg"
      />
      <Figure.Caption>
      <section class="hero-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="hero-text">
        <Button type="submit"><h4>News</h4></Button>
        </div>
        </div>
        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
        <h6>by Ronald Chen</h6>
    </div>
    </div>
    </div>
    </section>
      </Figure.Caption>
      </Figure>
      </Card.Body>
      </Card>
    </CardGroup>
    </section>
  );
}

export default Newssection;