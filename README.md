# Workout Regimen

A 12-week plan built on kettlebell complexes, long walks and 10,000 steps a day. Day 1 was Tuesday, October 6, 2026.

| File | What it is |
|---|---|
| [plan.md](plan.md) | The full plan: schedule, warm-ups, complexes, push-ups, lateral raises, rules |
| [log.md](log.md) | Daily log: steps, workouts, weights, how it felt |
| [images/october-2026.png](images/october-2026.png) | October calendar (Phase 1) |
| [images/hip-hinge.png](images/hip-hinge.png) | How to do a hip hinge |
| [source/](source/) | HTML sources for the images |

![October 2026 calendar](images/october-2026.png)

## Regenerating the images

```sh
cd source
node calendar-build.js   # writes october-2026.html
google-chrome --headless=new --hide-scrollbars --force-device-scale-factor=1.5 \
  --window-size=1400,1060 --screenshot=../images/october-2026.png october-2026.html
google-chrome --headless=new --hide-scrollbars --force-device-scale-factor=1.5 \
  --window-size=1400,850 --screenshot=../images/hip-hinge.png hip-hinge.html
```
