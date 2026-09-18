/* @ds-bundle: {"format":4,"namespace":"StalPlus","components":[{"name":"Button"},{"name":"StatTile"},{"name":"FeatureCard"},{"name":"SectionHeading"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i]) out.push(arguments[i]);
    }
    return out.join(' ');
  }

  // Button — the storefront's solid dark CTA, plus an outline secondary.
  function Button(props) {
    props = props || {};
    var variant = props.variant || 'solid';
    var Tag = props.href ? 'a' : 'button';
    var rest = {
      className: cx('sp-btn', 'sp-btn--' + variant, props.block ? 'sp-btn--block' : '', props.className),
      onClick: props.onClick
    };
    if (props.href) {
      rest.href = props.href;
    } else {
      rest.type = props.type || 'button';
      rest.disabled = props.disabled;
    }
    return h(Tag, rest, props.icon ? h('span', { 'aria-hidden': 'true', style: { lineHeight: 0 } }, props.icon) : null, props.children);
  }

  // StatTile — a big blue figure over a quiet uppercase caption.
  function StatTile(props) {
    props = props || {};
    return h(
      'div',
      { className: cx('sp-stat', props.className) },
      h(
        'div',
        { className: 'sp-stat__value' },
        props.value,
        props.unit ? h('span', { className: 'sp-stat__unit' }, props.unit) : null
      ),
      h('div', { className: 'sp-stat__label' }, props.label)
    );
  }

  // FeatureCard — white card, blue line icon, title, muted body.
  function FeatureCard(props) {
    props = props || {};
    return h(
      'div',
      { className: cx('sp-feature', props.className) },
      props.icon ? h('div', { className: 'sp-feature__icon', 'aria-hidden': 'true' }, props.icon) : null,
      props.title ? h('h3', { className: 'sp-feature__title' }, props.title) : null,
      props.children ? h('p', { className: 'sp-feature__body' }, props.children) : null
    );
  }

  // SectionHeading — uppercase azure section title.
  function SectionHeading(props) {
    props = props || {};
    var Tag = props.as || 'h2';
    return h(Tag, { className: cx('sp-heading', props.className) }, props.children);
  }

  window.StalPlus = {
    Button: Button,
    StatTile: StatTile,
    FeatureCard: FeatureCard,
    SectionHeading: SectionHeading
  };
})();
